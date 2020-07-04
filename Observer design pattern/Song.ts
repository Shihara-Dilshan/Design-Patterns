class Song{
    private name:string;
    private category:string;
    private releaseDated:string;
    private duration:number;


	constructor($name: string, $category: string, $releaseDated: string, $duration: number) {
		this.name = $name;
		this.category = $category;
		this.releaseDated = $releaseDated;
		this.duration = $duration;
	}


    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $category
     * @return {string}
     */
	public get $category(): string {
		return this.category;
	}

    /**
     * Getter $releaseDated
     * @return {string}
     */
	public get $releaseDated(): string {
		return this.releaseDated;
	}

    /**
     * Getter $duration
     * @return {number}
     */
	public get $duration(): number {
		return this.duration;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $category
     * @param {string} value
     */
	public set $category(value: string) {
		this.category = value;
	}

    /**
     * Setter $releaseDated
     * @param {string} value
     */
	public set $releaseDated(value: string) {
		this.releaseDated = value;
	}

    /**
     * Setter $duration
     * @param {number} value
     */
	public set $duration(value: number) {
		this.duration = value;
	}

}

export default Song;