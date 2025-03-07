import { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/atoms/Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Design System/Atoms/Label",
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};
