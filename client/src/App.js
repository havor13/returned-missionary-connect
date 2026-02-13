import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Global pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage"; 
import SignUpPage from "./pages/SignUpPage";
import MessagingPage from "./pages/MessagingPage";
import ProfilePage from "./pages/ProfilePage";

// Admin section 
import AdminPage from "./pages/Admin/AdminPage"; 
import UserManagementPage from "./pages/Admin/UserManagementPage"; 
import GroupManagementPage from "./pages/Admin/GroupManagementPage"; 
import EventManagementPage from "./pages/Admin/EventManagementPage";

// Groups module
import GroupsPage from "./pages/Groups/GroupsPage";
import GroupDetailPage from "./pages/Groups/GroupDetailPage";

// Profile module
import ConnectionsPage from "./pages/Profile/ConnectionsPage";
import MissionDetailsPage from "./pages/Profile/MissionDetailsPage";
import TestimonyPage from "./pages/Profile/TestimonyPage";

// Events module
import EventsPage from "./pages/Events/EventsPage";
import EventDetailPage from "./pages/Events/EventDetailPage";
import CalendarEventsPage from "./pages/Events/CalendarEventsPage";

// ✅ ProtectedRoute wrapper (simpler and reusable)
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Groups */}
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/groups/:id" element={<GroupDetailPage />} />

        {/* Events */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} /> 
        <Route path="/events/calendar" element={<CalendarEventsPage />} />

        {/* Messaging (protected) */}
        <Route 
          path="/messaging" 
          element={
            <ProtectedRoute>
              <MessagingPage />
            </ProtectedRoute>
          } 
        />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Admin (protected) */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute>
              <UserManagementPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/groups" 
          element={
            <ProtectedRoute>
              <GroupManagementPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/events" 
          element={
            <ProtectedRoute>
              <EventManagementPage />
            </ProtectedRoute>
          } 
        />

        {/* Profile (protected) */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile/connections" 
          element={
            <ProtectedRoute>
              <ConnectionsPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile/mission-details" 
          element={
            <ProtectedRoute>
              <MissionDetailsPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile/testimony" 
          element={
            <ProtectedRoute>
              <TestimonyPage />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<p>404 - Page Not Found</p>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
