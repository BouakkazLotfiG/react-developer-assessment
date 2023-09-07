import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center '>
      <h1 className='text-[100px]'>Home</h1>

      <div className='flex flex-col gap-8 items-center'>
        <div className='flex gap-6 items-center'>
          <h3 className='text-3xl'>Navigate to the Users Page</h3>
          <Link to='/users'>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
              Users
            </button>
          </Link>
        </div>

        <div className='flex gap-6 items-center'>
          <h3 className='text-3xl'>Navigate to the Products Page</h3>
          <Link to='/products'>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
              Products
            </button>
          </Link>
        </div>
      </div>

      <div className='mt-auto mb-4'>
        <p className='text-gray'>
          Thank you for letting me be part of this React Assessment test. I
          thoroughly enjoyed making every component, especially with this
          beautiful font, Looking foward for your review - Lotfi -
        </p>
      </div>
    </div>
  );
};

export default Home;
