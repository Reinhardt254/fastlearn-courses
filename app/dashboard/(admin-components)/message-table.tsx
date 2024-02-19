import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
 } from "@/components/ui/table"

 interface  productColumn {
   id         : string 
   name       : string
   email      : string
   message     : string
}

interface productColumnArray {
   data: productColumn []
}

const TableMessages: React.FC<productColumnArray> = ({ data }) => {
  return (
    <div>
       <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            {
            data.map((items)=>(
            <TableBody key={items.id}>
              <TableRow>
                {/* <TableCell className="font-medium">INV001</TableCell> */}
                <TableCell>{items.name}</TableCell>
                <TableCell>{items.email}</TableCell>
                <TableCell>{items.message}</TableCell>
              </TableRow>
            </TableBody>
            ))}
         </Table>
    </div>
  )
}

export default TableMessages