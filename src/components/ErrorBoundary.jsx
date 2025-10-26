import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log errors to a monitoring service here if desired
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-danger text-white p-4 m-2 rounded text-center animate__animated animate__shakeX">
          <h2>Oops! Something went wrong 🥺</h2>
          <p>Try refreshing, or come back later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
