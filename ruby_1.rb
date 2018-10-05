# Write a function that will loop through a list of integers and 
# print the index of each element after a 3 second delay.
class Index

  def self.print_stuff(array)
    array.each_with_index do |array, index|
      sleep(3)
      puts "the index of #{array} is #{index}"
    end
  end

  given = [1, 2, 3, 5, 23]
  print_stuff(given)

end
