

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div 
        className=''>
             {children}
      </div>
    </div>
  );
}
