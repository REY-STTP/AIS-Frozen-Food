// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import { WhatsAppButton } from "./whatsapp-button";

const meta: Meta<typeof WhatsAppButton> = {
  title: "UI/WhatsAppButton",
  component: WhatsAppButton,
  tags: ["autodocs"],
  args: { href: "https://wa.me/6285226122121", children: "Chat WhatsApp" },
};
export default meta;
type Story = StoryObj<typeof WhatsAppButton>;
export const Primary: Story = { args: { variant: "primary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Cream: Story = { args: { variant: "cream" } };
export const Large: Story = { args: { size: "lg" } };
