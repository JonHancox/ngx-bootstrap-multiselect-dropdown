
export class DropdownSettings {
    dropdownHeight = 'auto';
    btnWidth = 'auto';
    noneSelectedBtnText = 'None selected';
    dataIdProperty = 'id';
    dataNameProperty = 'name';
    deselectAllBtnText = 'Deselect all';
    enableFilter = false;
    selectAllBtnText = 'Select all';
    dropdownClasses: string = null;
    headerText: string = null;
    selectionLimit: number = null;
    showDeselectAllBtn: boolean = null;
    showSelectAllBtn: boolean = null;
    btnClasses: string = null;
    itemSingluarText: string = 'item';
    itemPluralText: string = 'items';

    constructor(settings?: any) {
        if(!settings) return;
        this.noneSelectedBtnText = settings.noneSelectedBtnText || this.noneSelectedBtnText;
        this.dataIdProperty = settings.dataIdProperty || this.dataIdProperty;
        this.dataNameProperty = settings.dataNameProperty || this.dataNameProperty;
        this.deselectAllBtnText = settings.deselectAllBtnText || this.deselectAllBtnText;
        this.enableFilter = settings.enableFilter;
        this.selectAllBtnText = settings.selectAllBtnText || this.selectAllBtnText;
        this.dropdownClasses = settings.dropdownClasses;
        this.headerText = settings.headerText;
        this.selectionLimit = settings.selectionLimit;
        this.showDeselectAllBtn = settings.showDeselectAllBtn;
        this.showSelectAllBtn = settings.showSelectAllBtn;
        this.btnWidth = settings.btnWidth || this.btnWidth; 
        this.dropdownHeight = settings.dropdownHeight || this.dropdownHeight;
        this.btnClasses = settings.btnClasses;
        this.itemSingluarText = settings.itemSingularText || this.itemSingluarText;
        this.itemPluralText = settings.itemPluralText || this.itemPluralText;
    }
}