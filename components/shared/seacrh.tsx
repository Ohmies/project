"use client"

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
        <div>
            <Command className="rounded-lg border shadow-md md:min-w-[800px] md:min-h-[30px] flex justify-center mt-2">
                <CommandInput
                    placeholder="Search your corse here...."
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <div
                    style={{
                        maxHeight: isOpen ? '300px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-in-out ',
                    }}
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
}

export default Search;
