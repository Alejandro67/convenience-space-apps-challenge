// components/CategoryCard.tsx
import React from "react";
import {
  Stack,
  Text,
  Card,
  CardBody,
  Image,
  Heading,
} from "@chakra-ui/react";
import Category from "@/interfaces/Category";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <>
    <Card maxW="sm" height="25rem"> {/* Set a fixed minHeight */}
      <CardBody>
        <Image w={'25rem'} height={'15rem'} src={category.imageUrl} alt={category.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Link style={{fontSize:'1.3rem',color:'blue',textDecoration:'underline'}} href={`/category?cat=${encodeURIComponent(category.name)}`}>{category.name}</Link>
          <Text>{category.description}</Text>
        </Stack>
      </CardBody>
    </Card>
    <br/>
    <br/>
    
    </>
  );
};

export default CategoryCard;