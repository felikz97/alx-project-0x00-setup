import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />

      <div className="space-x-2">
        {/* Rounded variants */}
        <Button title="Rounded-sm" styles="rounded-sm text-sm" />
        <Button title="Rounded-md" styles="rounded-md text-sm" />
        <Button title="Rounded-lg" styles="rounded-lg text-sm" />
        <Button title="Rounded-full" styles="rounded-full text-sm" />
      </div>
    </div>
  )
}

export default Landing
// This code defines a simple landing page component in React using TypeScript.
// It imports a Card component and a Button component, and renders them along with a title.
// The Button component is used to demonstrate different rounded styles for buttons.
// The page is styled using Tailwind CSS classes for layout and spacing.