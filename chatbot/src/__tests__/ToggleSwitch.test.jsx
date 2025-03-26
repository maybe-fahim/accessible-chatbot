// ToggleSwitch.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleSwitch from '../assets/components/ToggleSwitch';

test('toggles with keyboard interaction', async () => {
  const user = userEvent.setup();
  const handleToggle = jest.fn();

  render(
    <ToggleSwitch
      label="Theme"
      shortcutKey="Q"
      isActive={false}
      onToggle={handleToggle}
      iconOn="🌙"
      iconOff="☀️"
    />
  );

  const toggle = screen.getByRole('button', { name: /theme toggle/i });
  expect(toggle).toHaveAttribute('aria-pressed', 'false');

  await user.tab();
  expect(toggle).toHaveFocus();

  await user.keyboard('{Enter}');
  expect(handleToggle).toHaveBeenCalled();
});
