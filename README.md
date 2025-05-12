# DigiAyu - Blockchain-Based Healthcare Records System

## Overview
DigiAyu is a decentralized healthcare records management system built on blockchain technology. It enables secure storage, sharing, and management of patient records while ensuring data privacy and integrity through blockchain technology.

## Features
- **Secure Patient Records**: Store and manage patient records on the blockchain
- **QR Code Integration**: Generate unique QR codes for each patient record
- **Role-Based Access Control**: Different access levels for patients and healthcare providers
- **Cross-Chain Compatibility**: Uses mailbox contract for cross-chain communication
- **Modern UI/UX**: Built with React and Tailwind CSS for a seamless user experience
- **IPFS Integration**: Decentralized storage for patient records
- **Smart Contract Security**: Implements OpenZeppelin contracts for security

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Blockchain**: Solidity, Hardhat
- **Storage**: IPFS
- **Authentication**: Web3
- **Cross-Chain**: Hyperlane (Mailbox Contract)

## Project Structure
```
DigiAyu/
├── client/               # Frontend React application
│   ├── src/             # Source code
│   ├── public/          # Public assets
│   └── vite.config.js   # Vite configuration
├── backend/             # Node.js server
│   └── server.js        # Express server setup
├── blockchain/          # Smart contracts and blockchain logic
│   ├── contracts/       # Solidity smart contracts
│   └── hardhat.config.js # Hardhat configuration
└── records/            # Local storage for temporary files
```

## Smart Contracts
The main smart contract (`VoteMain.sol`) handles:
- File storage and sharing logic
- Cross-chain communication via mailbox contract
- Access control and ownership management
- IPFS CID management

## Prerequisites
- Node.js >= 14.0.0
- Yarn or npm
- MetaMask wallet
- Hardhat

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/DigiAyu.git
cd DigiAyu
\`\`\`

2. Install dependencies:
\`\`\`bash
# Install root dependencies
yarn install

# Install client dependencies
cd client
yarn install

# Install backend dependencies
cd ../backend
yarn install
\`\`\`

3. Set up environment variables:
Create `.env` files in both client and backend directories with necessary configurations.

4. Deploy smart contracts:
\`\`\`bash
cd blockchain
npx hardhat compile
npx hardhat deploy --network <your-network>
\`\`\`

5. Start the development servers:
\`\`\`bash
# Start backend server
cd backend
yarn start

# Start frontend application
cd client
yarn dev
\`\`\`

## Usage
1. Connect your MetaMask wallet
2. Access the application through localhost:5173
3. Create or access patient records
4. Generate QR codes for easy access
5. Share records securely with healthcare providers

## Security Features
- Implements OpenZeppelin contracts for standard security practices
- Role-based access control for different user types
- Secure cross-chain communication through Hyperlane mailbox
- IPFS for decentralized file storage
- Smart contract security best practices

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any queries or support, please open an issue in the GitHub repository. 