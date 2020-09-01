export interface Page {
    banner:             string;
    pageItems:          PageItem[];
    currentSortBy:      string;
    currentPage:        number;
    totalPages:         number;
    isDesignerHearted:  boolean;
    productCount:       number;
    isFavoriteDisabled: boolean;
}

export interface PageItem {
    code:                  string;
    department:            Department;
    productName:           string;
    brandName:             string;
    price:                 string;
    retailPrice:           string;
    isOneSize:             boolean;
    isDiscount:            boolean;
    isFavorite:            boolean;
    isWishList:            boolean;
    isNewArrival:          boolean;
    isBestSeller:          boolean;
    isPreOrder:            boolean;
    isWeddingShop:         boolean;
    isBeautyProduct:       boolean;
    isOOS:                 boolean;
    color:                 string;
    imageURLs:             string[];
    mobileImageURLs:       string[];
    pdpURL:                string;
    colorSwatch:           ColorSwatch[];
    isFinalSale:           boolean;
    readyDate:             string;
    firstReadyDate:        string;
    markdownDate:          MarkdownDate;
    upcomingMarkdownDate:  UpcomingMarkdownDate;
    markdownPrice:         MarkdownPrice;
    showMarkdownPrice:     boolean;
    inventoryLevel:        number;
    sizePopularity:        number;
    bagSizeString:         BagSizeString;
    isCollection:          boolean;
    firstNonEmptyCategory: string;
    isSizePreSelect:       boolean;
    hoverView:             boolean;
    isModelView:           boolean;
}

export enum BagSizeString {
    None = "None",
}

export interface ColorSwatch {
    code:       string;
    imageURL:   string;
    color:      string;
    isSelected: boolean;
}

export enum Department {
    F = "F",
}

export enum MarkdownDate {
    DEC252018120000AM = "Dec 25, 2018 12:00:00 AM",
    DEC31196940000PM = "Dec 31, 1969 4:00:00 PM",
    Jan182018120000AM = "Jan 18, 2018 12:00:00 AM",
    Jan262012120000AM = "Jan 26, 2012 12:00:00 AM",
}

export enum MarkdownPrice {
    The0 = "$0",
}

export enum UpcomingMarkdownDate {
    DEC31196940000PM = "Dec 31, 1969 4:00:00 PM",
    Feb7201920000PM = "Feb 7, 2019 2:00:00 PM",
    Jan18201820000PM = "Jan 18, 2018 2:00:00 PM",
}
