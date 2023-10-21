export default function UserProfilePage({ username }) {
  return <h1>{username}</h1>;
}

export async function getServerSideProps(ctx) {
  const { params, req, res } = ctx;
  return {
    props: {
      username: "Atesz",
    },
  };
}
