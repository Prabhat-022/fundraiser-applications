import Card from './Card'


const DonatePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Donate to a Child&apos;s Education</h1>
        <p className="text-lg text-center mb-10">Every child deserves a chance to learn and grow. Your donation can make a difference in the life of a child.</p>
        <div className="flex flex-wrap gap-4 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default DonatePage
