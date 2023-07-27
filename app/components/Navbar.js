import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
           
              <Link href="/">CodeCrafters: Unlocking the World of Programming </Link>
            
          </div>
          <ul className="flex space-x-4">
            <li>
              
                <Link href="/" className="text-white hover:text-blue-200">Home</Link>
              
            </li>

            <li>
             
                <Link href="/about" className="text-white hover:text-blue-200">About</Link>
              
            </li>
            <li>
              
                <Link href="/contact" className="text-white hover:text-blue-200">Contact</Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
