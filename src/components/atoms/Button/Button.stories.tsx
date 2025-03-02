import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Design System/Atoms/Button",
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "error", "success"],
        defaultValue: "default",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg", "icon"],
        defaultValue: "default",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Error: Story = {
  args: {
    children: "Cancel",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    children: "Save",
    variant: "success",
  },
};
