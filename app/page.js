"use client"
import { Client, Databases } from "appwrite";
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const metadata= {
  title: "Discover the power of JavaScript's essential array methods: Map, Filter, and Reduce. Learn how to transform, filter, and aggregate array elements efficiently, unleashing the true potential of your code.",
}

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64c2643109d746b09851');



export default function Home() {

  const [blogPosts, setBlogposts] = useState([])

  useEffect(() => {
    document.title = "Hunting Coder"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "64c266a3dd78ff5c7174",
    "64c266b31237f47c15c3",
     
    );

    promise.then(function (response) {
      console.log(response);
      setBlogposts(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 my-4">{post.metadescription}....</p>

              <Link href={`/blog/${post.slug}`} className="bg-blue-500 text-white px-4 py-2 mt-6  rounded hover:bg-blue-600">
                Read More
              </Link>

            </div>
          ))}
        </div>
      </div>
    </>

  )
}
