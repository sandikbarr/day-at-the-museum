export default function MetLayout({
  children,
  detail,
}: {
  children: React.ReactNode;
  detail: React.ReactNode;
}) {
  return (
    <>
      <div className="relative">
        <div className="fixed">
        {detail && detail}
        </div>
        {children}
      </div>
    </>
  )
}
