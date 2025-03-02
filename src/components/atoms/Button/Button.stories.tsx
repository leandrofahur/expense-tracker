import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Hoodie, Trash } from "@phosphor-icons/react";

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
        options: ["default", "error", "success", "ghost"],
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

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Icon: Story = {
  args: {
    children: <Hoodie />,
    variant: "ghost",
    size: "icon",
  },
};

export const IconWithLabel: Story = {
  args: {
    children: (
      <div className="flex items-center gap-2">
        <Trash />
        <span>Delete</span>
      </div>
    ),
    variant: "error",
  },
};
