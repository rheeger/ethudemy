pragma solidity ^0.4.17;

contract Lotto {
    address public manager;
    
    function Lotto() public {
        manager = msg.sender;
    }
    
    address[] public players;
    
    function addPlayer() public {
        players.push(msg.sender);
    }
    
    function getPlayerAdds() public view returns (address[]) {
        return players;
    
    }
    function getPlayerCount() public view returns (uint) {
        return players.length;
    }
    
}