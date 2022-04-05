package com.plateer.employee.mapper;

import com.plateer.employee.vo.Board;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {

    public List<Board> getBoardList(String startNumber, String countNumber);
    public Board viewBoard(@Param("_boardId") String boardId);
    public int insertBoard(@Param("_writer") String writer, @Param("_title") String title, @Param("_content") String content);
    public int updateBoard(Board board);
    public int deleteBoard(@Param("_boardId") String boardId);
    public int countBoardList();
}
