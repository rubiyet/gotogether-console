const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const Profile = [ "My Account", "My Book", "My Collected Book", "My Requested Book", "My Wishlist"]

const notifications = [
  {
    title: "New Book Request",
    description: "From Calvin Hawkins",
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: "2020-12-12",
    time: "12:00",
  },
  {
    title: "Your Requested is Accepted",
    description: "By Calvin Hawkins",
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: "2020-12-12",
    time: "12:00",
  },
  {
    title: "New Book Request",
    description: "From Calvin Hawkins",
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: "2020-12-12",
    time: "12:00",
    
  },
]

const Filters = [
  {
    title: "Author",
    lists : [
      "J.K. Rowling",
      "J.R.R. Tolkien",
      "J.D. Salinger",
      "J.R.R. Martin",
    ]
  },
  {
    title: "Subject",
    lists : [
      "Fiction",
      "Non-Fiction",
      "Fantasy",
      "Science Fiction",
    ]
  },
  {
    title: "Publisher",
    lists : [
      "Penguin",
      "HarperCollins",
      "Macmillan",
      "Simon & Schuster",
    ]
  },
]

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

export { people, Profile, notifications, Filters, array };