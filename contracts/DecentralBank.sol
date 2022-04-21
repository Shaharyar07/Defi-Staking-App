//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./RWD.sol";
import "./Tether.sol";

contract DecentralBank {
    string public name = "DecentralBank";
    address public owner;
    Tether public tether;
    RWD public rwd;

    constructor(RWD _rwd, Tether _tether) {
        tether = _tether;
        rwd = _rwd;
    }
}
