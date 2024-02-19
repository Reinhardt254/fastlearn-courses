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
   id          : string 
   title       : string
   price       : string
   firstname   : string
   surname     : string
   email       : string
   address     : string
}

interface productColumnArray {
   data: productColumn []
}

const TableSales: React.FC<productColumnArray> = ({ data }) => {
  return (
    <div>
       <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Method</TableHead> */}
                <TableHead>FirstName</TableHead>
                <TableHead>Surname</TableHead>
                <TableHead>email</TableHead>
                <TableHead>address</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            {
            data.map((items)=>(
            <TableBody key={items.id}>
              <TableRow>
                {/* <TableCell className="font-medium">INV001</TableCell> */}
                <TableCell>{items.firstname}</TableCell>
                <TableCell>{items.surname}</TableCell>
                <TableCell>{items.email}</TableCell>
                <TableCell>{items.address}</TableCell>
                <TableCell>{items.title}</TableCell>
                <TableCell className="text-right font-semibold">${
                  items.price
                }</TableCell>
              </TableRow>
            </TableBody>
            ))}
         </Table>
    </div>
  )
}

export default TableSales