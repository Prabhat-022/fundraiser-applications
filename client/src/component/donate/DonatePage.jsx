import { useSelector } from 'react-redux';
import Card from './Card'
import DonetionPopup from './DonetionPopup';

const DonatePage = () => {
  const statusDonatePopup = useSelector(store => store.cart.popup);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" bg-white rounded-lg shadow-lg p-5">
        <h1 className="text-4xl font-bold text-center mb-10">Donate to a Child&apos;s Education</h1>
        <p className="text-lg text-center mb-10">Every child deserves a chance to learn and grow. Your donation can make a difference in the life of a child.</p>
        <div className="flex flex-wrap gap-4 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   shadow-lg rounded-lg z-10
                ${statusDonatePopup ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <DonetionPopup />
      </div>

    </div>
  )
}

export default DonatePage
