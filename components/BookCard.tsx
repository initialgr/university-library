import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => (
  <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
    <Link
      href={`/books/${id}`}
      className={cn(
        "block w-full min-w-0",
        isLoanedBook && "flex flex-col items-center"
      )}
    >
      <BookCover coverColor={color} coverImage={cover} />

      <div className="mt-4 w-full max-w-40 min-w-0">
        <p className="book-title truncate">{title}</p>
        <p className="book-genre truncate">{genre}</p>
      </div>

      {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
            <Image
              src="/icons/calendar.svg"
              alt="Calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days left to return</p>
          </div>
          <Button variant="ghost" className="book-btn">
            Download Receipt
          </Button>
        </div>
      )}
    </Link>
  </li>
);
export default BookCard;
