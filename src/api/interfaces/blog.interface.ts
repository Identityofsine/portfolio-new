export interface Folder {
	id: string;
	name: string;
	children?: (Folder | Blog)[];
}

export interface Tag {
	id: string;
	name: string;
}

export interface Blog {
	id: string;
	title: string;
	content?: string;
	image?: string
	tags?: Tag[];
	createdAt: Date;
}
