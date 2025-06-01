import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <Card />

      <div className="space-x-2">
        <Button title="Large Rounded" styles="text-lg rounded-lg" />
      </div>
    </div>
  )
}

export default Landing

