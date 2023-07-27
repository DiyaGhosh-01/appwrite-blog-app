"use client"
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import { useState, useEffect } from 'react';
import { Client, Databases, Query } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64c2643109d746b09851');


const BlogPost = ({ params }) => {
    const [blogPost, setBlogPost] = useState()
    const { slug } = params;

    useEffect(() => {
        document.title = "Hunting Coder"
        const databases = new Databases(client);
    
        let promise = databases.listDocuments(
          "64c266a3dd78ff5c7174",
        "64c266b31237f47c15c3",
        [
            Query.equal('slug', slug)
        ]
         
        );
    
        promise.then(function (response) {
          console.log(response);
          setBlogPost(response.documents[0])
        }, function (error) {
          console.log(error);
        });
      }, [])

    
    // If the slug is not yet available, you can display a loading state or return null.
    if (!slug) {
        return null;
    }

    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>{blogPost?.title}</title>
                <meta name="description" content={blogPost?.content.substring(0, 150)} />
            </Head>
            <Navbar />
            <div className="bg-white rounded-lg shadow-lg p-6">
                {/* <img src={blogPost?.image} alt={blogPost?.title} className="w-full h-48 object-cover mb-4 rounded" /> */}
                {/* <h1 className="text-3xl font-semibold mb-2">{blogPost?.title}</h1> */}
                <p className="text-gray-700"
                 dangerouslySetInnerHTML={{ __html: blogPost?.content }}></p>
            </div>
        </div>
    );
};

export default BlogPost;
