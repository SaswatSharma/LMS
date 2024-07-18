import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/table";

const ModalLoader = ({
  id,
  item,
}: {
  id: number;
  item: {
    id: number;
    title: string;
  }[];
}) => {
  return (
    <>
      {id === 1 ? (
        <BorrowTable />
      ) : id === 2 ? (
        <IssueTable />
      ) : id === 3 ? (
        <ProfileTable />
      ) : null}
    </>
  );
};

const BorrowTable = () => {
  return (
    <Table>
      <TableCaption>Borrowed Books</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Book Title</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Issue Date</TableHeaderCell>
          <TableHeaderCell>Due Date</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Rich Dad Poor Dad</TableCell>
          <TableCell>Robert Kiyosaki</TableCell>
          <TableCell>27/06/2024</TableCell>
          <TableCell>12/06/2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Atomic Habits</TableCell>
          <TableCell>Napolean Heal</TableCell>
          <TableCell>29/06/2024</TableCell>
          <TableCell>08/06/2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>The Boring Book</TableCell>
          <TableCell>Ankur Warikoo</TableCell>
          <TableCell>20/06/2024</TableCell>
          <TableCell>31/06/2024</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const IssueTable = () => {
  return (
    <Table>
      <TableCaption>Issue Books</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Book ID</TableHeaderCell>
          <TableHeaderCell>Issue ID</TableHeaderCell>
          <TableHeaderCell>Book Title</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Due Date</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>2189</TableCell>
          <TableCell>918292STA1</TableCell>
          <TableCell>Atomic Habits</TableCell>
          <TableCell>Napolean Heal</TableCell>
          <TableCell>30/07/2024</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>890</TableCell>
          <TableCell>426381AS1</TableCell>
          <TableCell>Harry Potter</TableCell>
          <TableCell>J K Rowling</TableCell>
          <TableCell>12/07/2024</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const ProfileTable = () => {
  return (
    <Table>
      <TableCaption>My Profile</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Profile ID</TableHeaderCell>
          <TableHeaderCell>First Name</TableHeaderCell>
          <TableHeaderCell>Last Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>#OAPBC</TableCell>
          <TableCell>Albert</TableCell>
          <TableCell>Edison</TableCell>
          <TableCell>albertEdison@gmail.com</TableCell>
          <TableCell>9829182991</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ModalLoader;
