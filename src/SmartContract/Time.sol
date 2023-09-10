pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract AuctionUpgradeable is ERC1155Upgradeable, OwnableUpgradeable {
    // Struct to hold auction details
    struct Auction {
        address seller;
        uint256 tokenId;
        uint256 reservePrice;
        uint256 startTime;
        uint256 endTime;
        bool ended;
        address highestBidder;
        uint256 highestBid;
    }

    // Mapping from token ID to its auction
    mapping(uint256 => Auction) public auctions;

    // Modifiers
    modifier onlyAuctionSeller(uint256 tokenId) {
        require(msg.sender == auctions[tokenId].seller, "Only auction seller can call this");
        _;
    }

    // Initialize the contract
    function initialize() initializer public {
        __ERC1155_init("Your Token Name", "YTN");
        __Ownable_init();
    }

    // Create a new auction
    function createAuction(
        uint256 tokenId,
        uint256 reservePrice,
        uint256 duration
    ) external {
        require(reservePrice > 0, "Reserve price must be greater than 0");
        require(auctions[tokenId].seller == address(0), "Auction already exists");

        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + duration;

        auctions[tokenId] = Auction({
            seller: msg.sender,
            tokenId: tokenId,
            reservePrice: reservePrice,
            startTime: startTime,
            endTime: endTime,
            ended: false,
            highestBidder: address(0),
            highestBid: 0
        });

        emit AuctionCreated(tokenId, reservePrice, startTime, endTime);
    }

    // Place a bid on an auction
    function placeBid(uint256 tokenId) external payable {
        Auction storage auction = auctions[tokenId];
        require(auction.endTime > block.timestamp, "Auction has ended");
        require(msg.value > auction.highestBid, "Bid must be higher than the current highest bid");

        if (auction.highestBidder != address(0)) {
            // Refund the previous highest bidder
            payable(auction.highestBidder).transfer(auction.highestBid);
        }

        auction.highestBidder = msg.sender;
        auction.highestBid = msg.value;
        emit BidPlaced(tokenId, msg.sender, msg.value);
    }

    function endAuction(uint256 tokenId) external onlyAuctionSeller(tokenId) {
        Auction storage auction = auctions[tokenId];
        require(!auction.ended, "Auction has already ended");
        require(block.timestamp >= auction.endTime, "Auction has not ended yet");

        auction.ended = true;

        if (auction.highestBid >= auction.reservePrice) {
            // Transfer the token to the highest bidder
            _mint(auction.highestBidder, tokenId, 1, "");
            payable(auction.seller).transfer(auction.highestBid);
        } else {
            // Return the token to the seller
            _mint(auction.seller, tokenId, 1, "");
        }

        emit AuctionEnded(tokenId, auction.highestBidder, auction.highestBid);
    }

    // Withdraw funds from the contract (only the owner can call this)
    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // Events
    event AuctionCreated(uint256 tokenId, uint256 reservePrice, uint256 startTime, uint256 endTime);
    event BidPlaced(uint256 tokenId, address bidder, uint256 amount);
    event AuctionEnded(uint256 tokenId, address winner, uint256 amount);
}