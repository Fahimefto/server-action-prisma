import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { SVGProps } from "react";
import { Query } from "@/query";

export async function TodoList() {
  const todos = await Query.todo.getTodos();
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex items-center h-14 border-b gap-4 px-4 md:h-16 md:gap-6 lg:px-6">
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
          <h1 className="text-lg font-semibold">Taskss</h1>
        </div>
        <form className="flex-1">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
              placeholder="Search tasks..."
              type="search"
            />
          </div>
        </form>
        <Button size="sm">New List</Button>
      </header>
      <div className="flex flex-1 items-start p-4 gap-4 md:gap-8 md:p-10">
        <div className="hidden w-[300px] border-r md:block">
          <nav className="flex flex-col gap-2">
            <Button
              className="w-full justify-start pl-4 text-left font-semibold"
              variant="ghost"
            >
              All Tasks
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                4
              </Badge>
            </Button>
            <Button
              className="w-full justify-start pl-4 text-left"
              variant="ghost"
            >
              Work
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                2
              </Badge>
            </Button>
            <Button
              className="w-full justify-start pl-4 text-left"
              variant="ghost"
            >
              Personal
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                1
              </Badge>
            </Button>
          </nav>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {todos &&
              todos?.map((todo) => (
                <div key={todo.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <Checkbox className="h-4 w-4" id={todo.id} />
                    <label htmlFor={todo.id}>{todo.title}</label>
                    <div className="ml-auto flex gap-2">
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="ghost"
                      >
                        <FileEditIcon className="h-4 w-4" />
                        <span className="sr-only">Edit task</span>
                      </Button>
                      <Button
                        className="rounded-full"
                        size="icon"
                        variant="ghost"
                      >
                        <TrashIcon className="h-4 w-4" />
                        <span className="sr-only">Delete task</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Package2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function FileEditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
