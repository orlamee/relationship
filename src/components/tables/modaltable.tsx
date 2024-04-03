"use client";
import { useState } from "react";
import {
	ColumnDef,
	flexRender,
	ColumnFiltersState,
	getCoreRowModel,
	useReactTable,
	SortingState,
	getPaginationRowModel,
	getFilteredRowModel,
	getSortedRowModel,
} from "@tanstack/react-table";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ChevronLeftIcon, ChevronRightIcon, Search } from "lucide-react";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}
function ModalTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			columnFilters,
			sorting,
		},
	});
	return (
		<div>
			<div className="flex items-center md:gap-6 md:w-full md:justify-between">
				<div className="w-full flex items-center border-[1px] border-[#F3F4F6] p-4">
					<Search className="mr-3 text-[#21003D]" />
					<input
						placeholder="Search"
						value={
							(table.getColumn("name")?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table.getColumn("name")?.setFilterValue(event.target.value)
						}
						className="outline-none h-full  md:w-full text-[12px] text-[#9CA3AF] placeholder:text-[#9CA3AF]"
					/>
				</div>
			</div>
			<div className=" rounded-t-[14px] overflow-hidden mt-7">
				<Table>
					<TableHeader className="bg-[#FCFCFC] h-[65px]">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead
											key={header.id}
											className="uppercase text-[11px] font-[500] leading-[12px]"
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className="h-[75px] text-black font-[400] text-[12px] cursor-pointer"
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex mt-5 items-center justify-center space-x-4 py-2">
				<button
					className="bg-[#240552] text-white flex items-center rounded-[6px] p-1.5 cursor-pointer text-[12px]"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					<ChevronLeftIcon className="w-4 h-4" />
					Previous
				</button>
				<button
					className="bg-[#240552] text-white flex items-center rounded-[6px] p-1.5 cursor-pointer text-[12px]"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
					<ChevronRightIcon className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
}

export default ModalTable;
