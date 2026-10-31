
import { useState } from "react";
import {
  siInstagram,
  siFacebook,
  siYoutube,
} from "simple-icons";

import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  BarChart3,
  Inbox,
  Users,
  Megaphone,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  CheckCircle2,
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  Menu,
  X,
  Share2,
} from "lucide-react";

import "./index.css";

// Brand icon component
function BrandIcon({
  path,
  color,
  size = 21,
}: {
  path: string;
  color: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

// Navigation
const navigation = [
  {
    title: "WORKSPACE",
    items: [
      { name: "Overview", icon: LayoutDashboard },
      { name: "Social Accounts", icon: Share2 },
      { name: "Content Calendar", icon: CalendarDays },
      { name: "Posts", icon: FileText },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { name: "Analytics", icon: BarChart3 },
      { name: "Inbox", icon: Inbox },
      { name: "Leads CRM", icon: Users },
      { name: "Ads Manager", icon: Megaphone },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { name: "Reports", icon: BarChart3 },
      { name: "Settings", icon: Settings },
    ],
  },
];

// Dashboard statistics
const stats = [
  {
    label: "Total Followers",
    value: "48,295",
    change: "+12.8%",
    up: true,
    icon: Users,
  },
  {
    label: "Total Reach",
    value: "2.4M",
    change: "+18.2%",
    up: true,
    icon: Eye,
  },
  {
    label: "Engagement Rate",
    value: "6.84%",
    change: "+2.4%",
    up: true,
    icon: Heart,
  },
  {
    label: "Total Posts",
    value: "128",
    change: "-3.2%",
    up: false,
    icon: FileText,
  },
];

// Connected social accounts
const accounts = [
  {
    name: "Instagram",
    username: "@yourbrand",
    followers: "24.5K",
    path: siInstagram.path,
    color: "#e65c9a",
  },
  {
    name: "Facebook",
    username: "Your Brand",
    followers: "18.2K",
    path: siFacebook.path,
    color: "#4385ee",
  },
  {
    name: "YouTube",
    username: "Your Channel",
    followers: "5.5K",
    path: siYoutube.path,
    color: "#ed5656",
  },
];

// Upcoming posts
const posts = [
  {
    title: "Introducing our new collection 🚀",
    platform: "Instagram",
    date: "Today, 5:30 PM",
    status: "Scheduled",
    color: "#e65c9a",
    path: siInstagram.path,
  },
  {
    title: "Behind the scenes of our brand",
    platform: "Facebook",
    date: "Tomorrow, 11:00 AM",
    status: "Scheduled",
    color: "#4385ee",
    path: siFacebook.path,
  },
  {
    title: "Our latest product showcase",
    platform: "YouTube",
    date: "Nov 02, 4:00 PM",
    status: "Scheduled",
    color: "#ed5656",
    path: siYoutube.path,
  },
];

const chartData = [35, 48, 42, 65, 54, 72, 60, 85, 68, 92, 78, 100];

function App() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-logo">P</div>
          <span>
            pulse<span className="brand-light">desk</span>
          </span>
          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace-select">
          <div className="workspace-avatar">AC</div>
          <div className="workspace-info">
            <strong>Acme Creative</strong>
            <small>Agency workspace</small>
          </div>
          <ChevronDown size={16} />
        </div>

        {navigation.map((group) => (
          <div className="nav-group" key={group.title}>
            <div className="nav-heading">{group.title}</div>

            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`nav-item ${
                    active === item.name ? "active" : ""
                  }`}
                  onClick={() => {
                    setActive(item.name);
                    setMobileOpen(false);
                  }}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>

                  {item.name === "Inbox" && (
                    <span className="nav-count">4</span>
                  )}
                </button>
              );
            })}
          </div>
        ))}

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">
              <TrendingUp size={19} />
            </div>

            <strong>Upgrade your plan</strong>

            <p>
              Unlock more accounts, analytics and powerful tools.
            </p>

            <button onClick={() => setActive("Settings")}>
              Explore plans <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="profile">
            <div className="profile-avatar">SK</div>

            <div className="profile-info">
              <strong>Sanket Kumar</strong>
              <small>Administrator</small>
            </div>

            <MoreHorizontal size={19} />
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main area */}
      <main className="main-area">
        {/* Header */}
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>

          <div className="breadcrumb">
            Workspace <span>/</span> <strong>{active}</strong>
          </div>

          <div className="topbar-actions">
            <div className="search-box">
              <Search size={17} />
              <input placeholder="Search anything..." />
              <kbd>⌘ K</kbd>
            </div>

            <button
              className="icon-button notification"
              aria-label="Notifications"
            >
              <Bell size={19} />
              <i />
            </button>

            <div className="top-avatar">SK</div>
          </div>
        </header>

        {/* Page content */}
        <div className="page-content">
          {active === "Overview" ? (
            <>
              {/* Page heading */}
              <div className="page-heading">
                <div>
                  <div className="greeting">
                    FRIDAY, OCTOBER 31, 2026
                  </div>

                  <h1>
                    Good evening, Sanket <span>👋</span>
                  </h1>

                  <p>
                    Here's what's happening across your social channels.
                  </p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => setActive("Posts")}
                >
                  <Plus size={17} />
                  Create post
                </button>
              </div>

              {/* Filters */}
              <div className="filter-row">
                <div className="filter-label">
                  <span className="live-dot" />
                  Dashboard overview
                </div>

                <button className="date-filter">
                  Last 30 days <ChevronDown size={15} />
                </button>
              </div>

              {/* Statistics */}
              <section className="stats-grid">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div className="stat-card" key={stat.label}>
                      <div className="stat-top">
                        <span>{stat.label}</span>

                        <div className="stat-icon">
                          <Icon size={18} />
                        </div>
                      </div>

                      <div className="stat-value">{stat.value}</div>

                      <div className="stat-bottom">
                        <span
                          className={
                            stat.up ? "positive" : "negative"
                          }
                        >
                          {stat.up ? (
                            <ArrowUpRight size={14} />
                          ) : (
                            <ArrowDownRight size={14} />
                          )}

                          {stat.change}
                        </span>

                        <span>vs previous 30 days</span>
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* Dashboard top grid */}
              <section className="dashboard-grid">
                {/* Audience growth */}
                <div className="panel performance-panel">
                  <div className="panel-header">
                    <div>
                      <h3>Audience growth</h3>
                      <p>Track your audience across platforms</p>
                    </div>

                    <button className="select-button">
                      All platforms <ChevronDown size={14} />
                    </button>
                  </div>

                  <div className="chart-summary">
                    <strong>2,840</strong>
                    <span className="positive">
                      <ArrowUpRight size={14} /> 14.6%
                    </span>
                  </div>

                  <div className="chart-area">
                    <div className="chart-labels">
                      <span>3K</span>
                      <span>2K</span>
                      <span>1K</span>
                      <span>0</span>
                    </div>

                    <div className="chart">
                      <div className="chart-grid">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>

                      <svg
                        viewBox="0 0 600 190"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="chartFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#7658ef"
                              stopOpacity=".25"
                            />
                            <stop
                              offset="100%"
                              stopColor="#7658ef"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d={`M ${chartData
                            .map(
                              (v, i) =>
                                `${i * 54},${180 - v * 1.55}`
                            )
                            .join(" L ")} L 594,190 L 0,190 Z`}
                          fill="url(#chartFill)"
                        />

                        <polyline
                          points={chartData
                            .map(
                              (v, i) =>
                                `${i * 54},${180 - v * 1.55}`
                            )
                            .join(" ")}
                          fill="none"
                          stroke="#8065ed"
                          strokeWidth="3"
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="chart-months">
                    <span>Oct 01</span>
                    <span>Oct 05</span>
                    <span>Oct 10</span>
                    <span>Oct 15</span>
                    <span>Oct 20</span>
                    <span>Oct 25</span>
                    <span>Oct 31</span>
                  </div>
                </div>

                {/* Connected accounts */}
                <div className="panel accounts-panel">
                  <div className="panel-header">
                    <div>
                      <h3>Connected accounts</h3>
                      <p>Your social channels</p>
                    </div>

                    <button
                      className="text-button"
                      onClick={() => setActive("Social Accounts")}
                    >
                      View all
                    </button>
                  </div>

                  <div className="account-list">
                    {accounts.map((account) => (
                      <div
                        className="account-item"
                        key={account.name}
                      >
                        <div
                          className="platform-icon"
                          style={{
                            color: account.color,
                            background: `${account.color}15`,
                          }}
                        >
                          <BrandIcon
                            path={account.path}
                            color={account.color}
                          />
                        </div>

                        <div className="account-details">
                          <strong>{account.name}</strong>
                          <small>{account.username}</small>
                        </div>

                        <div className="account-followers">
                          <strong>{account.followers}</strong>
                          <small>Followers</small>
                        </div>

                        <span className="connected-dot" />
                      </div>
                    ))}
                  </div>

                  <button
                    className="connect-button"
                    onClick={() => setActive("Social Accounts")}
                  >
                    <Plus size={16} />
                    Connect new account
                  </button>
                </div>
              </section>

              {/* Dashboard bottom grid */}
              <section className="dashboard-grid bottom-grid">
                {/* Upcoming posts */}
                <div className="panel posts-panel">
                  <div className="panel-header">
                    <div>
                      <h3>Upcoming posts</h3>
                      <p>Your content publishing schedule</p>
                    </div>

                    <button
                      className="text-button"
                      onClick={() => setActive("Content Calendar")}
                    >
                      View calendar <ArrowUpRight size={14} />
                    </button>
                  </div>

                  <div className="post-list">
                    {posts.map((post, index) => (
                      <div className="post-item" key={index}>
                        <div
                          className="post-thumbnail"
                          style={{
                            background: `${post.color}18`,
                            color: post.color,
                          }}
                        >
                          <BrandIcon
                            path={post.path}
                            color={post.color}
                          />
                        </div>

                        <div className="post-details">
                          <strong>{post.title}</strong>
                          <small>
                            {post.platform} · {post.date}
                          </small>
                        </div>

                        <span className="status-scheduled">
                          <Clock size={12} />
                          {post.status}
                        </span>

                        <button
                          className="more-button"
                          aria-label="More post options"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick insights */}
                <div className="panel activity-panel">
                  <div className="panel-header">
                    <div>
                      <h3>Quick insights</h3>
                      <p>Performance highlights</p>
                    </div>
                  </div>

                  <div className="insight-item">
                    <div className="insight-icon purple">
                      <Heart size={18} />
                    </div>

                    <div>
                      <strong>Engagement is growing</strong>
                      <p>
                        Your engagement increased by 18% this month.
                      </p>
                    </div>
                  </div>

                  <div className="insight-item">
                    <div className="insight-icon green">
                      <CheckCircle2 size={18} />
                    </div>

                    <div>
                      <strong>Publishing on track</strong>
                      <p>
                        All scheduled posts are ready for publishing.
                      </p>
                    </div>
                  </div>

                  <div className="insight-item">
                    <div className="insight-icon orange">
                      <MessageCircle size={18} />
                    </div>

                    <div>
                      <strong>Inbox needs attention</strong>
                      <p>
                        You have 4 conversations waiting for a reply.
                      </p>
                    </div>
                  </div>

                  <button
                    className="insights-link"
                    onClick={() => setActive("Analytics")}
                  >
                    Explore analytics <ArrowUpRight size={15} />
                  </button>
                </div>
              </section>

              {/* Demo notice */}
              <div className="demo-notice">
                Demo dashboard · All displayed metrics are sample data,
                not live platform information.
              </div>
            </>
          ) : (
            <div className="placeholder-page">
              <div className="placeholder-icon">
                <LayoutDashboard size={28} />
              </div>

              <h1>{active}</h1>

              <p>
                This section is ready for development. Your{" "}
                {active.toLowerCase()} workspace will appear here.
              </p>

              <button
                className="primary-button"
                onClick={() => setActive("Overview")}
              >
                Back to overview
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
