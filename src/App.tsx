import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Today from './pages/Today';
import Workout from './pages/Workout';
import Habits from './pages/Habits';
import Progress from './pages/Progress';
import Coach from './pages/Coach';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-500">
          <h2>Something went wrong.</h2>
          <pre className="text-xs break-all whitespace-pre-wrap">
            {this.state.error instanceof Error 
              ? `${this.state.error.name}: ${this.state.error.message}\n${this.state.error.stack}` 
              : JSON.stringify(this.state.error, null, 2)}
          </pre>
        </div>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Today />} />
            <Route path="workout" element={<Workout />} />
            <Route path="habits" element={<Habits />} />
            <Route path="progress" element={<Progress />} />
            <Route path="coach" element={<Coach />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
