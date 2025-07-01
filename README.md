# 🚗 CRED Garage Dashboard — Clone UI

A modern, responsive web dashboard inspired by the sleek design of **CRED Garage**. Built with **Next.js**, **TailwindCSS**, and **Framer Motion**, this project demonstrates best practices in UI/UX, component structure, and smooth user interactions. It's perfect for showcasing frontend skills in your portfolio.

---

## ✨ Features

### 👤 User Profile Summary  
Displays avatar, name, level badge, and a gamified XP progress bar.

### 🎁 Benefits Section  
A card-based layout showcasing perks and offers. Each card contains:
- Icon  
- Title  
- Description  
- Call-to-action (e.g. **"Claim"**, **"Activate"**)

### 💎 Reward Points Chart  
A visual tracker of user reward points using a radial chart (Recharts).  
Includes goal progress toward the next level.

### 🌓 Dark/Light Mode  
- Toggle theme with persistence  
- Stored in `localStorage`  
- Fully responsive across light and dark themes

### ⏳ Loading Skeletons  
Elegant skeleton screens for profile, rewards, benefits, vehicle data, and achievements using animated ShadCN Skeleton components.

### 🛠 Vehicle Details Panel  
Includes current vehicle status and active services (e.g. Insurance, Fastag, Traffic Challans).  
Each service has:
- Status tag (e.g. active, low balance)
- Expiry/balance
- Action button (e.g. Pay, Top Up)

### 🚘 3D Vehicle Viewer  
Interactive 3D car component using **React Three Fiber** + **Drei**.  
Includes:
- Static or rotatable car model (GLTF)
- Polished canvas styling
- Future support for animated transitions or hover effects

### 🏆 Achievements Grid  
Tile layout showcasing user accomplishments with icon badges and descriptions. Styled with Framer Motion animations.

### ⚡ Smooth Transitions  
- Layout & interaction animations powered by **Framer Motion**  
- Subtle hover effects and motion tap responses for enhanced UX

---

## 🧰 Tech Stack

| Tool                   | Purpose                              |
|------------------------|--------------------------------------|
| **Next.js**            | React framework with SSR/SSG         |
| **TailwindCSS**        | Utility-first styling                |
| **Zustand**            | Global state management              |
| **Framer Motion**      | Animations & transitions             |
| **ShadCN/UI**          | Design components (Cards, Skeletons) |
| **Recharts**           | Reward point visualization           |
| **Lucide Icons**       | Clean, consistent icon set           |
| **React Three Fiber**  | 3D Car rendering (Three.js wrapper)      |
| **@react-three/drei**  | Useful abstractions for 3D scene     |
| **Jest + RTL**         | Unit/component testing               |

---

## 🧪 Testing

- Component-level tests written using **Jest** + **React Testing Library**
- Coverage includes:
  - Profile Summary
  - Reward Chart
  - Vehicle Details
  - Benefits Grid
  - Achievement Card

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/cred-garage-dashboard.git
cd cred-garage-dashboard

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
