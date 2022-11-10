import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import useTitle from "../../Hook/useTitle";
import BlogHeader from "./BlogHeader";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <BlogHeader></BlogHeader>
      <div className="space-y-4 mx-10 my-16">
        <details
          className="group border-l-4 border-orange-300 shadow-lg shadow-slate-900 bg-gray-50 p-6"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
              <div className="text-lg">
                <AiFillQuestionCircle></AiFillQuestionCircle>
              </div>
              Difference between SQL and NoSQL?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            When it comes to choosing a database the biggest decisions is
            picking a relational (SQL) or non-relational (NoSQL) data structure.
            While both the databases are viable options still there are certain
            key differences between the two that users must keep in mind when
            making a decision. The Main Differences: <br />
            <b>1) Type – </b>SQL databases are primarily called as Relational
            Databases (RDBMS); whereas NoSQL database are primarily called as
            non-relational or distributed database.
            <br />
            <b> 2)Language</b> – SQL databases defines and manipulates data
            based structured query language (SQL). Seeing from a side this
            language is extremely powerful. SQL is one of the most versatile and
            widely-used options available which makes it a safe choice
            especially for great complex queries. But from other side it can be
            restrictive. SQL requires you to use predefined schemas to determine
            the structure of your data before you work with it. Also all of your
            data must follow the same structure. This can require significant
            up-front preparation which means that a change in the structure
            would be both difficult and disruptive to your whole system. A NoSQL
            database has dynamic schema for unstructured data. Data is stored in
            many ways which means it can be document-oriented, column-oriented,
            graph-based or organized as a KeyValue store. This flexibility means
            that documents can be created without having defined structure
            first. Also each document can have its own unique structure. The
            syntax varies from database to database, and you can add fields as
            you go.
            <br />
            <b> 3) Scalability</b> – In almost all situations SQL databases are
            vertically scalable. This means that you can increase the load on a
            single server by increasing things like RAM, CPU or SSD. But on the
            other hand NoSQL databases are horizontally scalable. This means
            that you handle more traffic by sharding, or adding more servers in
            your NoSQL database. It is similar to adding more floors to the same
            building versus adding more buildings to the neighborhood. Thus
            NoSQL can ultimately become larger and more powerful, making these
            databases the preferred choice for large or ever-changing data sets.
            <br />
            <b> 4) Structure</b> – SQL databases are table-based on the other
            hand NoSQL databases are either key-value pairs, document-based,
            graph databases or wide-column stores. This makes relational SQL
            databases a better option for applications that require multi-row
            transactions such as an accounting system or for legacy systems that
            were built for a relational structure.
            <br />
            <b> 5) </b>Property followed – SQL databases follow ACID properties
            (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL
            database follows the Brewers CAP theorem (Consistency, Availability
            and Partition tolerance).
            <br /> <b>6) Support</b> – Great support is available for all SQL
            database from their vendors. Also a lot of independent consultations
            are there who can help you with SQL database for a very large scale
            deployments but for some NoSQL database you still have to rely on
            community support and only limited outside experts are available for
            setting up and deploying your large scale NoSQL deployments.
          </p>
        </details>

        <details className="group border-l-4 border-orange-300 shadow-lg shadow-slate-900 bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
              <div className="text-lg">
                <AiFillQuestionCircle></AiFillQuestionCircle>
              </div>
              What is JWT, and how does it work?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            <b> It Works</b> <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: The header and the
            payload. The signature. The JOSE (JSON Object Signing and
            Encryption) header contains the type of token — JWT in this case —
            and the signing algorithm. The payload contains the claims. This is
            displayed as a JSON string, usually containing no more than a dozen
            fields to keep the JWT compact. This information is typically used
            by the server to verify that the user has permission to perform the
            action they are requesting. There are no mandatory claims for a JWT,
            but overlaying standards may make claims mandatory. For example,
            when using JWT as bearer access token under OAuth2.0, iss, sub, aud,
            and exp must be present. some are more common than others. The
            signature ensures that the token hasn’t been altered. The party that
            creates the JWT signs the header and payload with a secret that is
            known to both the issuer and receiver, or with a private key known
            only to the sender. When the token is used, the receiving party
            verifies that the header and payload match the signature.
          </p>
        </details>
        <details className="group border-l-4 border-orange-300 shadow-lg shadow-slate-900 bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
              <div className="text-lg">
                <AiFillQuestionCircle></AiFillQuestionCircle>
              </div>
              What is the difference between javascript and NodeJS?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <b>1. NodeJS :</b> NodeJS is a cross-platform and opensource
            Javascript runtime environment that allows the javascript to be run
            on the server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development.
            <br />
            <b> 2. JavaScript :</b> Javascript is a Scripting language. It is
            mostly abbreviated as JS. It can be said that Javascript is the
            updated version of the ECMA script. Javascript is a high-level
            programming language that uses the concept of Oops but it is based
            on prototype inheritance.
          </p>
        </details>
        <details className="group border-l-4 border-orange-300 shadow-lg shadow-slate-900 bg-gray-50 p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
              <div className="text-lg">
                <AiFillQuestionCircle></AiFillQuestionCircle>
              </div>
              How does NodeJS handle multiple requests at the same time?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            We know NodeJS application is single-threaded. Say, if processing
            involves request A that takes 10 seconds, it does not mean that a
            request which comes after this request needs to wait 10 seconds to
            start processing because NodeJS event loops are only
            single-threaded. The entire NodeJS architecture is not
            single-threaded.
            <br /> <b> It Works-</b> <br /> NodeJS receives multiple client
            requests and places them into EventQueue. NodeJS is built with the
            concept of event-driven architecture. NodeJS has its own EventLoop
            which is an infinite loop that receives requests and processes them.
            EventLoop is the listener for the EventQueue. If NodeJS can process
            the request without I/O blocking then the event loop would itself
            process the request and sends the response back to the client by
            itself. But, it is possible to process multiple requests parallelly
            using the NodeJS cluster module or worker_threads module.
          </p>
        </details>
      </div>
      ;
    </div>
  );
};

export default Blog;
