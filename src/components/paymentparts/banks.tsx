"use client";
export default function Banks({ user }: { user: any }) {
	return (
		<div className="bg-white p-10 rounded-[10px] border border-[#F3F4F6]">
			<div className="grid grid-cols-3 gap-10 justify-between">
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Account Name
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.bank_account.virtual_account_name}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Account Number
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.bank_account.virtual_account_number}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Bank Name
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						{user?.bank_account.virtual_account_bank}
					</h6>
				</div>
				<div className="border border-[#F3F4F6] p-7 rounded-[4px] shadow-sm">
					<h4 className="text-[#9CA3AF] font-[400] leading-[30px] text-[12px]">
						Account Balance
					</h4>
					<h6 className="text-[#000] font-[500] leading-[30px] text-[12px]">
						150,000
					</h6>
				</div>
			</div>
		</div>
	);
}
