
export type ManufacturerContact = {
    address: string,
    email: string,
    customerCareNo: string,
    mobileNo: string
}

export type ManufacturerStats = {
    label: string,
    value: string,
    suffix: string
}
export type ManufacturerTimeline = {
    year: string,
    message: string,
    imageUrl: string,
}

export type ManufacturerInfo = {
    _id: string,
    name: string,
    logoText: string,
    tagline: string,
    profileText: string[],
    contactDetails: ManufacturerContact
    createdAt: string,
    updatedAt: string,
    stats: ManufacturerStats[],
    timeline: ManufacturerTimeline[]

}