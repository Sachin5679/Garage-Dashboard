import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProfileSummary } from '@/components/ProfileSummary';

jest.mock('@/store/useAppStore', () => ({
  useAppStore: () => ({
    user: {
      name: 'Sachin Jayadev',
      level: 5,
      xpPercent: 80,
      avatarUrl: '/test-avatar.jpg',
    },
    isLoading: false,
    benefits: [],
    achievements: [],
    setUser: jest.fn(),
    setBenefits: jest.fn(),
    setAchievements: jest.fn(),
    setLoading: jest.fn(),
  }),
}));

describe('ProfileSummary', () => {
  it('renders name, level, and XP', () => {
    render(
      <ProfileSummary
        name="Sachin Jayadev"
        level={5}
        xpPercent={80}
        avatarUrl="/test-avatar.jpg"
      />
    );
    expect(screen.getByText('Sachin Jayadev')).toBeInTheDocument();
    expect(screen.getByText('Level 5')).toBeInTheDocument();
    expect(screen.getByText('80% to next level')).toBeInTheDocument();
  });

  it('renders avatar fallback if image is missing', () => {
    render(
      <ProfileSummary
        name="SJ"
        level={1}
        xpPercent={50}
        avatarUrl=""
      />
    );

    const fallback = screen.getByText('SJ', { selector: 'span[data-slot="avatar-fallback"]' });
    expect(fallback).toBeInTheDocument();
  });
});
