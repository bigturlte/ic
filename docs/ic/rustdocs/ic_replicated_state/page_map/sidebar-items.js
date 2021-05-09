initSidebarItems({"enum":[["PersistenceError","Errors that can happen when one saves or loads a PageMap."]],"fn":[["allocate_pages","Makes tracked copies of the provided pages.  The pages will be automatically deallocated when they go out of scope."],["allocated_pages_count","Returns the total number of tracked pages allocated at the moment."]],"mod":[["int_map","This module provides an implementation of a persistent map with integer keys."]],"struct":[["Buffer","Buffer provides a file-like interface to a PageMap."],["PAGE_SIZE","Size of an OS memory page in bytes."],["PageDelta","`PageDelta` represents a changeset of the module heap."],["PageIndexTag",""],["PageMap","PageMap is a data structure that represents an image of a canister virtual memory.  The memory is viewed as a collection of pages. `PageMap` uses 4KiB host OS pages to track the heap contents, not 64KiB Wasm pages."],["TrackedPage","Tracked page is ref-counted immutable memory page."]],"type":[["PageIndex","0-based index of the host virtual memory page (i.e. not Wasm memory page)."]]});