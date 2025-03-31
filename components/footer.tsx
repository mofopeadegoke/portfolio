export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-gray-500 text-xs mt-2">Designed and built with ❤️ using Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

