import React from 'react';
import { Service } from './service';
function App() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const post = async () => {
      setLoading(true);
      try {
        const r = await Service.get('doctors', {
          title: 'foo',
          body: 'bar',
          userId: 1,
        });
        setPosts(r);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    post();
  }, []);

  return (
    !loading && (
      <div className=" bg-gray flex flex-col items-center pt-4 container-fluid mx-auto ">
        <h2 className="text-white text-2xl m-4">Doctor's Lists</h2>
        <div className="flex flex-col  justify-center items-center w-full">
          {posts &&
            posts.map((post) => (
              <div
                className="bg-white p-8 rounded-xl shadow-md w-10/12 mb-4 flex sm:flex-col md:flex-row"
                key={post.id}
              >
                <div className="flex sm:items-start items-center mr-6 w-6/12 sm:flex-col md:flex-row">
                  <img
                    src={post.photo}
                    className="cat rounded-full w-24 h-24 mr-6"
                    alt="No-Img"
                  />
                  <div>
                    <h2> {post.fullname}</h2>
                    <h2>{post.clinic}</h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-6/12">
                  <div>
                    <label>Phone: </label>
                    <span> {post.phone}</span>
                  </div>
                  <div>
                    <label>Gender: </label>
                    <span> {post.gender}</span>
                  </div>
                  <div>
                    <label>Email: </label>
                    <span> {post.email}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  );
}

export default App;
