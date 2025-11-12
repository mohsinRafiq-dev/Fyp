# LearnCode AI Backend

A robust Node.js backend application for LearnCode AI, featuring user authentication, email verification, and secure code execution in Docker containers.

## 🚀 Features

- **User Authentication**: JWT-based authentication with OTP email verification
- **Code Execution**: Multi-language code execution (Python, JavaScript, C++) in secure Docker containers with **full input support**
- **Interactive Input**: Support for `cin` (C++), `input()` (Python), and `stdin` (JavaScript) - all languages support user input!
- **Persistent Containers**: Fast code execution with WebSocket communication (no container overhead)
- **Email Service**: HTML email templates for verification and password reset
- **Security**: Input validation, rate limiting, and containerized code execution
- **Database**: MongoDB with Mongoose ODM
- **Testing**: Comprehensive test suite with 100% success rate (189/189 tests including persistent container tests)

## 🛠️ Technology Stack

- **Runtime**: Node.js 16+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcrypt password hashing
- **Email**: NodeMailer with HTML templates
- **Code Execution**: Docker containerization
- **Testing**: Jest with MongoDB Memory Server
- **Environment**: dotenv for configuration management

## 📋 Prerequisites

- Node.js 16.0.0 or higher
- MongoDB (local or cloud instance)
- Docker (for code execution features)
- SMTP server credentials (for email features)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/learncode-ai-backend.git
   cd learncode-ai-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment configuration**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**

   ```bash
   # Ensure MongoDB is running locally or configure cloud connection
   # The application will connect automatically using DB_URI from .env
   ```

5. **Docker setup (optional)**

   ```bash
   # For Windows
   setup-docker.bat

   # For Linux/Mac
   ./setup-docker.sh
   ```

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# Database Configuration
DB_URI=mongodb://localhost:27017/learncode-ai
DB_NAME=learncode-ai

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Email Configuration (NodeMailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM="LearnCode AI <noreply@learncode-ai.com>"

# OAuth Configuration (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Security Configuration
BCRYPT_ROUNDS=12
SESSION_SECRET=your_session_secret_key
```

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

### Docker Compose

```bash
docker-compose up -d
```

## 🧪 Testing

The project includes a comprehensive test suite with **100% success rate**.

### Run Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- "auth.controller.test.js"

# Run in watch mode
npm run test:watch
```

### Test Statistics

- **Total Tests**: 189/189 (100% success rate)
  - Authentication & User Management: 168 tests
  - Persistent Container Architecture: 21 tests (NEW!)
- **Test Suites**: 10 (Unit: 6, Integration: 4)
- **Coverage**: 95%+ across all metrics

### Testing Documentation

- 📖 **[Complete Testing Documentation](docs/TESTING_DOCUMENTATION.md)** - Comprehensive testing guide
- 📊 **[Test Suite Summary](docs/TEST_SUITE_SUMMARY.md)** - Quick overview and statistics
- 🔧 **[Troubleshooting Guide](docs/TEST_TROUBLESHOOTING_GUIDE.md)** - Common issues and solutions
- ✅ **[Persistent Container Tests](tests/integration/persistentContainers.test.js)** - Input support validation

## 📚 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

#### Verify Email

```http
POST /api/auth/verify-email
Content-Type: application/json

{
  "email": "john@example.com",
  "otp": "123456"
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### Code Execution Endpoints

#### Execute Code (with Input Support!)

```http
POST /api/code/execute
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "code": "name = input('Enter name: ')\nprint(f'Hello {name}!')",
  "language": "python",
  "input": "Alice\n25"
}
```

**Input Support**:

- **Python**: `input()`, `int(input())`, etc.
- **C++**: `cin >>`, `getline()`, `scanf()`
- **JavaScript**: `process.stdin`, data events

**Example with C++ cin**:

```json
{
  "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int a, b;\n  cin >> a >> b;\n  cout << a + b << endl;\n  return 0;\n}",
  "language": "cpp",
  "input": "10\n20"
}
```

📖 **See full input guide**: [User Input Guide](docs/User_Input_Guide.md)

## 🗂️ Project Structure

```
learncode-ai-backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   ├── services/       # Business logic services
│   ├── utils/          # Utility functions
│   └── validators/     # Input validation
├── tests/
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── __mocks__/      # Test mocks
├── docs/               # Documentation
├── docker/             # Docker configurations
├── logs/               # Application logs
└── temp/               # Temporary files
```

## 🔒 Security Features

- **Password Hashing**: bcrypt with configurable rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive request validation
- **Code Execution Security**: Docker container isolation
- **Rate Limiting**: Protection against brute force attacks
- **CORS Configuration**: Cross-origin request handling
- **Environment Variables**: Sensitive data protection

## 🐳 Docker Support

### Persistent Container Architecture

LearnCode AI uses persistent Docker containers with WebSocket communication for fast, efficient code execution:

- Containers start with the server and run continuously
- WebSocket connections for real-time code execution
- No container overhead per request (millisecond execution times)
- Full support for user input across all languages

### Language Support

- **Python**: Containerized Python 3.11+ execution with `input()` support
- **JavaScript**: Node.js 18+ runtime with `stdin` support
- **C++**: GCC compiler with `cin` support

### Input Support Features

- ✅ **Python**: `input()`, `int(input())`, `float(input())`
- ✅ **C++**: `cin >>`, `getline()`, `scanf()`
- ✅ **JavaScript**: `process.stdin`, event-based input
- 📚 **Full Documentation**: [User Input Guide](docs/User_Input_Guide.md)
- 🧪 **21 Tests**: All input scenarios validated (100% passing)

### Security Features

- Memory limits (256MB per container)
- CPU limits (50% per container)
- Network isolation (no internet access)
- Execution timeouts (30 seconds default)
- Automatic cleanup and restart

## 📊 Performance

- **Response Time**: < 100ms for authentication endpoints
- **Code Execution**: < 10 seconds timeout with resource limits
- **Concurrent Users**: Tested with multiple concurrent requests
- **Memory Usage**: Optimized with automatic cleanup
- **Database**: Indexed queries for optimal performance

## 🔧 Development

### Code Style

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

### Database Operations

```bash
# Reset database (development only)
npm run db:reset

# Seed database with sample data
npm run db:seed
```

## 🚀 Deployment

### Environment Setup

1. Set `NODE_ENV=production`
2. Configure production database URI
3. Set secure JWT secret
4. Configure email service
5. Set up Docker for code execution

### Recommended Deployment Platforms

- **Heroku**: Easy deployment with add-ons
- **AWS**: EC2 with Docker support
- **Digital Ocean**: Droplets with container support
- **Railway**: Simple Node.js deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write comprehensive tests for new features
- Follow existing code style and conventions
- Update documentation for API changes
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` folder for detailed guides
  - 📖 [User Input Guide](docs/User_Input_Guide.md) - How to use input in code
  - 🎯 [Quick Reference](docs/Quick_Reference_Input.md) - Input examples
  - 🏗️ [Container Architecture](docs/Persistent_Container_Architecture.md) - Technical details
- **Issues**: Report bugs via GitHub Issues
- **Testing**: See [Testing Documentation](docs/TESTING_DOCUMENTATION.md)
- **Troubleshooting**: See [Troubleshooting Guide](docs/TEST_TROUBLESHOOTING_GUIDE.md)

## 🎯 Roadmap

- [ ] OAuth integration (Google, GitHub)
- [ ] Real-time collaboration features
- [ ] Enhanced code execution languages
- [ ] Performance monitoring dashboard
- [ ] API rate limiting enhancements
- [ ] Automated deployment pipeline

---

**Built with ❤️ for the LearnCode AI community**
