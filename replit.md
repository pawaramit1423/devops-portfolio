# DevOps Portfolio Website

## Overview

This is a modern, single-page portfolio website for a DevOps Engineer with 4.5 years of experience. The application showcases professional experience, technical skills, projects, education, and provides a contact form for potential clients or employers. It features a dark-themed, tech-focused design with smooth scrolling navigation and interactive components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based architecture
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark color scheme optimized for DevOps/tech aesthetics
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API with JSON communication
- **Request Handling**: Express middleware for logging, JSON parsing, and error handling
- **Storage**: In-memory storage implementation with interface for easy database migration

### Build System & Development
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot Module Replacement (HMR) for rapid development cycles
- **Build Output**: Static assets served from Express in production
- **TypeScript**: Strict compilation with path mapping for clean imports

### Data Storage Solutions
- **Current**: In-memory storage using Map data structures for contacts and users
- **Future-Ready**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema**: Type-safe database schemas with Zod validation for runtime type checking
- **Migration Strategy**: Drizzle Kit for database schema migrations

### Authentication & Authorization
- **Architecture**: Basic user schema prepared for future authentication implementation
- **Session Management**: Express session configuration ready with PostgreSQL session store
- **Security**: Prepared infrastructure for secure authentication flows

## External Dependencies

### Database & Infrastructure
- **PostgreSQL**: Configured via Neon Database serverless platform
- **Drizzle ORM**: Type-safe database operations with automatic TypeScript types
- **Session Storage**: PostgreSQL-backed session management with connect-pg-simple

### UI & Design System
- **Shadcn/ui**: Comprehensive component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter and JetBrains Mono for professional typography

### Development & Build Tools
- **Vite**: Build tool with React plugin and runtime error overlay for Replit
- **TypeScript**: Static type checking with strict configuration
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Deployment & Hosting
- **Replit**: Development environment with specialized Vite plugins
- **Environment Variables**: Database connection and configuration management
- **Static Assets**: Optimized build output for production deployment