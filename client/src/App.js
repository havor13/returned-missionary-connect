// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main pages
import Dashboard from "./pages/Dashboard";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";
import MessagingPage from "./pages/MessagingPage";
import LoginPage from "./pages/LoginPage"; 
import SignUpPage from "./pages/SignUpPage";

// Admin section 
import AdminPage from "./pages/Admin/AdminPage"; 
import UserManagementPage from "./pages/Admin/UserManagementPage"; 
import GroupManagementPage from "./pages/Admin/GroupManagementPage"; 
import EventManagementPage from "./pages/Admin/EventManagementPage";

// Groups subpages
import GroupsPage from "./pages/Groups/GroupsPage";
import GroupDetailPage from "./pages/Groups/GroupDetailPage";

// Profile subpages
import ConnectionsPage from "./pages/Profile/ConnectionsPage";
import MissionDetailsPage from "./pages/Profile/MissionDetailsPage";
import TestimonyPage from "./pages/Profile/TestimonyPage";

// Events section
import EventsPage from "./pages/Events/EventsPage";
import EventDetailPage from "./pages/Events/EventDetailPage";
import CalendarEventsPage from "./pages/Events/CalendarEventsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Groups */}
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/groups/:id" element={<GroupDetailPage />} />

        {/* Events */}
        <Route path="/events" element={<EventsPage />} />

        {/* Messaging */}
        <Route path="/messaging" element={<MessagingPage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Signup */}
        <Route path="/signup" element={<SignUpPage />} />

         {/* Events */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} /> 
        <Route path="/events/calendar" element={<CalendarEventsPage />} />
        

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/users" element={<UserManagementPage />} />
        <Route path="/admin/groups" element={<GroupManagementPage />} />
        <Route path="/admin/events" element={<EventManagementPage />} />

        {/* Profile */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/connections" element={<ConnectionsPage />} />
        <Route path="/profile/mission-details" element={<MissionDetailsPage />} />
        <Route path="/profile/testimony" element={<TestimonyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
