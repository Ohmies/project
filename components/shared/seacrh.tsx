"use client";

import React, { useState } from "react";
import {
    Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut,
} from "@/components/ui/command";

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Handler for toggling the visibility of the suggestions
    const handleInputFocus = () => setIsOpen(true);
    const handleInputBlur = () => setIsOpen(false);

    return (
        <div className="relative"> {/* เพิ่ม z-index เพื่อให้ search bar อยู่บนสุด */}
            <Command className="rounded-lg border shadow-md md:min-w-[1250px] md:min-h-[60px] flex justify-center mt-2">
                <CommandInput
                    placeholder="Search your course here...."
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <div
                    style={{
                        maxHeight: isOpen ? '300px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out ',
                    }}
                    className="absolute top-full left-0 right-0 bg-white border mt-1"
                >
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <span>Mail</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>  
                </div>
            </Command>
        </div>
    );
};

export default Search;
