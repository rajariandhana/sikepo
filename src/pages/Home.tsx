import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Link } from "@heroui/react";
import instance from "../libs/axios/instance";
import { useQuery } from "@tanstack/react-query";

interface User {
  _id: string;
  name: string;
  status: string;
  createdAt?: string;
}

export default function Home() {

  const fetchUsers = async () => {
    try {
      const response = await instance.get("/users");
      return response.data.data as User[];
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      console.log("Users fetch attempt finished.");
    }
  }
  
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })
  
  return (
    <>
      {/* <span>users: {JSON.stringify(users)}</span> */}
      <Table fullWidth={true}>
        <TableHeader>
          {/* <TableColumn>ID</TableColumn> */}
          <TableColumn>Name</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody
          items={users || []}
          isLoading={isLoading}
          loadingContent={<Spinner />}
        >
          {(user: User) => (
            <TableRow key={user._id}>
              {/* <TableCell>{user._id}</TableCell> */}
              <TableCell>{user.name}</TableCell>
              <TableCell>
                {user.status === "listening" ? <span className="text-green-500 bg-green-100 px-2 py-1 rounded-full text-sm">
                  {user.status}
                </span> : <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full text-sm">
                  {user.status}
                </span>}
              </TableCell>
              <TableCell>{user.createdAt?.split("T")[0]}</TableCell>
              <TableCell>
                <Link 
                  href={`/users/${user._id}`}
                  size="sm"
                  underline="hover"
                >
                    View
                </Link>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}