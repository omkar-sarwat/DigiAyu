# DigiAyu - AI-Powered Blockchain Healthcare System

## Overview
DigiAyu is a revolutionary AI-powered healthcare solution built on blockchain technology. The platform integrates cutting-edge technologies such as blockchain (IPFS), machine learning (ML), deep learning, and OpenAI to streamline operations, ensure robust data security, and optimize doctor-patient interactions.

## Features
- **Secure Patient Records**: Store and manage patient records using IPFS blockchain and advanced encryption
- **QR Code Integration**: Generate unique QR codes for patient records and queue management
- **Role-Based Access Control**: Different access levels for patients and healthcare providers
- **Cross-Chain Compatibility**: Uses mailbox contract for cross-chain communication
- **Modern UI/UX**: Built with React and Tailwind CSS for a seamless user experience
- **ML & Deep Learning**: AI-driven insights for optimizing medical practices and decision-making
- **Smart SOS System**: OpenAI-powered emergency response feature for critical situations
- **Telemedicine Support**: Real-time video consultations with healthcare providers

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Blockchain**: Solidity, Hardhat, IPFS
- **AI/ML**: OpenAI, TensorFlow
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
```bash
git clone https://github.com/omkar-sarwat/DigiAyu.git
cd DigiAyu
```

2. Install dependencies:
```bash
# Install root dependencies
yarn install

# Install client dependencies
cd client
yarn install

# Install backend dependencies
cd ../backend
yarn install
```

3. Set up environment variables:
Create `.env` files in both client and backend directories with necessary configurations.

4. Deploy smart contracts:
```bash
cd blockchain
npx hardhat compile
npx hardhat deploy --network <your-network>
```

5. Start the development servers:
```bash
# Start backend server
cd backend
yarn start

# Start frontend application
cd client
yarn dev
```

## Usage
1. Connect your MetaMask wallet
2. Access the application through localhost:5173
3. Create or access patient records
4. Generate QR codes for easy access
5. Share records securely with healthcare providers
6. Use AI-powered features for optimized healthcare delivery

## Security Features
- Implements OpenZeppelin contracts for standard security practices
- Role-based access control for different user types
- Secure cross-chain communication through Hyperlane mailbox
- IPFS for decentralized file storage
- Advanced encryption algorithms for data protection

## Future Enhancements
- Multi-language Support for diverse patient demographics
- Enhanced Telemedicine Integration
- Predictive Healthcare Analytics using ML
- Advanced Emergency Response Systems
- Integration with more healthcare providers

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request with a description of your changes

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any queries or support, please open an issue in the GitHub repository.
